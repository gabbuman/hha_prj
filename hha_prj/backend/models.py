from django.db import models

# Create your models here.
class MonthlyRecord(models.Model):
    description = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

class maternity_MonthlyRecord(models.Model):
    month_name = models.CharField(max_length=15)
    beds_available = models.PositiveSmallIntegerField()
    bed_days = models.PositiveSmallIntegerField()
    patient_days = models.PositiveSmallIntegerField()
    hospitalized = models.PositiveSmallIntegerField()
    discharged_alive = models.PositiveSmallIntegerField()
    died_before_48h = models.PositiveSmallIntegerField()
    died_after_48h = models.PositiveSmallIntegerField()
    days_hospitalised = models.PositiveSmallIntegerField()
    died_after_48h = models.PositiveSmallIntegerField()
    referrals = models.PositiveSmallIntegerField()
    transfers = models.PositiveSmallIntegerField()
    self_discharged = models.PositiveSmallIntegerField()
    stayed_in_ward = models.PositiveSmallIntegerField()
    admissions = models.PositiveSmallIntegerField()
    
    birth_weight_less_one = models.PositiveSmallIntegerField()
    birth_weight_between_one_and_two = models.PositiveSmallIntegerField()
    birth_weight_more_than_two = models.PositiveSmallIntegerField()
    birth_weight_not_weighed = models.PositiveSmallIntegerField()
    birth_immedietly_breatfed = models.PositiveSmallIntegerField()
    birth_skin_to_skin_thearpy = models.PositiveSmallIntegerField()
    
    postnatal_breastfeed_women_receive_vitamin_A = models.PositiveSmallIntegerField()
    postnatal_breastfeed_women_with_muac_less_210 = models.PositiveSmallIntegerField()
    posnatal_breastfeed_women_with_malnutrition_support= models.PositiveSmallIntegerField()
    postnatal_domestic_visit_zero_to_three = models.PositiveSmallIntegerField()
    postnatal_post_natal_consultations = models.PositiveSmallIntegerField()
    
    num_of_obstetric_complications_recorded = models.PositiveSmallIntegerField()
    num_of_obstetric_complications_referred = models.PositiveSmallIntegerField()
    
    stilborn_macerated = models.PositiveSmallIntegerField()
    stillborn_not_macerated = models.PositiveSmallIntegerField()
    
    maternal_death_num_in_hospital = models.PositiveSmallIntegerField()
    maternal_death_num_in_community = models.PositiveSmallIntegerField()
    
    support_zero_to_three = models.PositiveSmallIntegerField()
    support_four_to_six = models.PositiveSmallIntegerField()
    support_seven_to_nine = models.PositiveSmallIntegerField()
    support_total_visits = models.PositiveSmallIntegerField()
    
    num_pregnancies_at_risk = models.PositiveSmallIntegerField()
    anemia_in_pregnant_women = models.PositiveSmallIntegerField()
    pregnant_women_receiving_iron_folate = models.PositiveSmallIntegerField()
    pregnant_women_treated_for_iron_deficiency_anemia = models.PositiveSmallIntegerField()
    pregnant_women_with_birth_plan = models.PositiveSmallIntegerField()
    pregnant_women_with_malaria_treated = models.PositiveSmallIntegerField()
    pregnant_women_received_impregnated_mosquito_net = models.PositiveSmallIntegerField()
    pregnant_women_muac_less_than_210 = models.PositiveSmallIntegerField()
    pregnant_women_mam_or_mas_supported = models.PositiveSmallIntegerField()

    folate = models.PositiveSmallIntegerField()
    women_receiving_acetic_acid_inspection = models.PositiveSmallIntegerField()
    women_positive_smear_test_taken_care_of = models.PositiveSmallIntegerField()
    women_receiving_post_abortion_care = models.PositiveSmallIntegerField()
    
    deliveries_less_than_15 = models.PositiveSmallIntegerField()
    deliveries_15_to_19 = models.PositiveSmallIntegerField()
    deliveries_20_to_24 = models.PositiveSmallIntegerField()
    deliveries_25_to_29 = models.PositiveSmallIntegerField()
    deliveries_30_and_more = models.PositiveSmallIntegerField()
    deliveries_unknown = models.PositiveSmallIntegerField()
    
    labor_use_partograph = models.PositiveSmallIntegerField()
    labor_active_management_of_third_phase_labours = models.PositiveSmallIntegerField()