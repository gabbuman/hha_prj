from backend.models import RehabMonthlyRecord
from rest_framework import serializers
from backend.models import MaternityMonthlyRecord, MonthlyRecord, CommunityHealthMonthlyRecord

#Monthly Record Serializer
class MonthlyRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = MonthlyRecord
        fields = '__all__'

# Rehab Monthly Record Serializer
class RehabMonthlyRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = RehabMonthlyRecord
        fields = '__all__'

# Maternity Monthly Record Serializer
class MaternityMonthlyRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = MaternityMonthlyRecord
        fields = '__all__'     

# Community health Record Serializer
class CommunityHealthMonthlyRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommunityHealthMonthlyRecord
        fields = '__all__'   
